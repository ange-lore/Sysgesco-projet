package com.sygesco.sygesco.repo;

import com.sygesco.sygesco.domain.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepo extends JpaRepository<AppUser, Long> {
  AppUser findByUsername(String username);
}
