package com.sygesco.sygesco.repo;

import com.sygesco.sygesco.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
  Role findByName(String name);
}
