# Stage 1: Build
FROM mcr.microsoft.com/dotnet/aspnet:8.0-nanoserver-1809 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0-nanoserver-1809 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["SuperCheeseria.Server/SuperCheeseria.Server.csproj", "SuperCheeseria.Server/"]
RUN dotnet restore "./SuperCheeseria.Server/SuperCheeseria.Server.csproj"
COPY . .
WORKDIR "/src/SuperCheeseria.Server"
RUN dotnet build "./SuperCheeseria.Server.csproj" -c %BUILD_CONFIGURATION% -o /app/build

# Stage 2: Test (optional)
FROM build AS test
ARG BUILD_CONFIGURATION=Release
RUN dotnet test "./SuperCheeseria.Server.csproj" -c %BUILD_CONFIGURATION% --no-restore

# Stage 3: Publish
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./SuperCheeseria.Server.csproj" -c %BUILD_CONFIGURATION% -o /app/publish /p:UseAppHost=false

# Stage 4: Final
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SuperCheeseria.Server.dll"]