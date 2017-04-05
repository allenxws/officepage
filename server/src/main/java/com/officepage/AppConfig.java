package com.officepage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

/**
 * Created by xuwushun on 2017/3/19.
 */
@Configuration
@ComponentScan(basePackages = "com.officepage")
public class AppConfig {
	Logger logger = LoggerFactory.getLogger(getClass());

	@Bean
	public Properties messageClient() {
		Properties properties = new Properties();
		try {
			InputStream inputStream = getClass().getResourceAsStream("/messages/Messages.properties");
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));
			properties.load(bufferedReader);
			inputStream.close();
		} catch (IOException e1) {
			logger.debug("get message properties error", e1);
		}
		return properties;
	}

	@Bean
	public JavaMailSenderImpl mailClient() {
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
		javaMailSender.setHost("smtp.qq.com");
		javaMailSender.setProtocol("smtp");
		javaMailSender.setUsername("1471132931@qq.com");
		javaMailSender.setPassword("xwtidjohqudwfghd");
		Properties properties = new Properties();
		properties.put("mail.smtp.auth", true);
		properties.put("mail.smtp.starttls.enable", true);
		properties.put("mail.smtp.timeout", 5000);
		javaMailSender.setJavaMailProperties(properties);
		return javaMailSender;
	}
}
