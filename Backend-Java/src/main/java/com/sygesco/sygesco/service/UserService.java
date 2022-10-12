package com.sygesco.sygesco.service;

import com.sygesco.sygesco.domain.Role;
import com.sygesco.sygesco.domain.AppUser;

import java.util.List;

public interface UserService {
  AppUser saveUser(AppUser user);
  Role saveRole(Role role);
  void addRoleToUser(String username, String roleName);
  AppUser getUser(String username);

  List<AppUser> getUsers();
}
