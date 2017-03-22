package com.officepage;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * Created by xuwushun on 2017/3/19.
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.officepage")
public class AppConfig {

}
