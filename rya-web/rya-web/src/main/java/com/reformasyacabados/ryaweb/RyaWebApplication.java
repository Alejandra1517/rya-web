package com.reformasyacabados.ryaweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@Configuration
@EntityScan(basePackages = "com.reformasyacabados.ryaweb.models")

@EnableJpaRepositories(basePackages = "com.reformasyacabados.ryaweb.repository")

public class RyaWebApplication {
	public static void main(String[] args) {
		SpringApplication.run(RyaWebApplication.class, args);
	}

}
