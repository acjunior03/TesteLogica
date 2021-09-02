#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["TesteLogica/TesteLogica.csproj", "TesteLogica/"]
RUN dotnet restore "TesteLogica/TesteLogica.csproj"
COPY . .
WORKDIR "/src/TesteLogica"
RUN dotnet build "TesteLogica.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TesteLogica.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TesteLogica.dll"]