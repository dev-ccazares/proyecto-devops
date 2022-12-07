FROM openjdk:11
ARG SPRING_PROFILES_ACTIVE=docker
ARG SPRING_DATASOURCE_URL=jdbc:postgresql://proyectoups.postgres.database.azure.com:5432/factura
ARG SPRING_DATASOURCE_USERNAME=postgres
ARG SPRING_DATASOURCE_PASSWORD=Cris123.
COPY grupo02-0.0.1-SNAPSHOT.jar venta.jar
ENTRYPOINT ["java", "-jar", "venta.jar"]