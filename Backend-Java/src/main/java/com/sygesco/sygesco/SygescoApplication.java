package com.sygesco.sygesco;

import com.sygesco.sygesco.domain.Role;
import com.sygesco.sygesco.domain.AppUser;
import com.sygesco.sygesco.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class SygescoApplication {

  public static void main(String[] args) {
    SpringApplication.run(SygescoApplication.class, args);
  }
  @Bean
  PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
  }

//
//  @Bean
//  CommandLineRunner run (UserService userService){
//    return args ->{
//      userService.saveRole(new Role(null, "ROLE_USER"));
//      userService.saveRole(new Role(null, "ROLE_MANAGER"));
//      userService.saveRole(new Role(null, "ROLE_ADMIN"));
//      userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));
//
//      userService.saveUser(new AppUser(null, "Pavel", "le", "1245", new ArrayList<>()));
//      userService.saveUser(new AppUser(null, "Pavel2", "le2", "1245", new ArrayList<>()));
//      userService.saveUser(new AppUser(null, "Pavel3", "le3", "1245", new ArrayList<>()));
//      userService.saveUser(new AppUser(null, "Pavel4", "le4", "1245", new ArrayList<>()));
//
//      userService.addRoleToUser("le", "ROLE_USER");
//      userService.addRoleToUser("le2", "ROLE_USER");
//      userService.addRoleToUser("le2", "ROLE_MANAGER");
//      userService.addRoleToUser("le3", "ROLE_ADMIN");
//      userService.addRoleToUser("le4", "ROLE_SUPER_ADMIN");
//      userService.addRoleToUser("le4", "ROLE_ADMIN");
//
//    };
//  }

}
