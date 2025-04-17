package com.example.fullstack.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.example.fullstack.model.User;
import com.example.fullstack.repository.UserRepository;

@RestController
//@CrossOrigin(origins = "http://192.168.2.104:3000")
//@RequestMapping("/api/users")
public class UserController {

	private final UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@PostMapping
	public User createUser(@RequestBody User user) {
		return userRepository.save(user); // 💾 Save logic is here
	}

	@CrossOrigin(origins = "http://192.168.2.104:3000") // or use "*" to allow all origins
    @GetMapping("/api/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
}
