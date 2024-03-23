# Usar la imagen base del SDK de .NET 8.0 para construir la aplicación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["backendNet.csproj", "./"]
RUN dotnet restore "backendNet.csproj"
COPY . .
RUN dotnet build "backendNet.csproj" -c Release -o /app/build

# Publicar la aplicación
FROM build AS publish
RUN dotnet publish "backendNet.csproj" -c Release -o /app/publish

# Usar la imagen base de ASP.NET 8.0 para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_ENVIRONMENT=Production
ENTRYPOINT ["dotnet", "backendNet.dll"]
