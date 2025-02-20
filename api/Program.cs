using api.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Negotiate;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var allowedOrigins = builder.Configuration.GetValue<string>("allowedOrigins")!.Split(",");

builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer("name=DefaultConnection");
});

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy => policy.WithOrigins("http://localhost:4200") // Permitir Angular
                        .AllowAnyMethod() // Permitir todos los métodos (GET, POST, etc.)
                        .AllowAnyHeader() // Permitir todos los encabezados
                        .AllowCredentials()
    );
});


// builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
//     .AddNegotiate();

// builder.Services.AddAuthorization(options =>
// {
//     options.FallbackPolicy = options.DefaultPolicy;
// });


var app = builder.Build();

app.UseCors("AllowAngularApp");
app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/prueba", () => "Servidor en funcionamiento");

app.MapControllers();

app.Run();