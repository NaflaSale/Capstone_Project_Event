package com.example.eventms.controller;

import com.example.eventms.model.Entities.Admins;
import com.example.eventms.model.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;
    @RestController
    @RequestMapping(path = "api/admin")
    public class AdminController {
        private AdminService adminService;

        @Autowired
        public AdminController(AdminService adminService) {
            this.adminService = adminService;
        }

        @GetMapping
        public List <Admins> getAdmins() {
            return adminService.getAdmins();
        }

        @PostMapping("add")
        public void registerNewAdmin(@RequestBody Admins adminname){
            adminService.addNewAdmin(adminname);
        }

        @GetMapping(path = "{adminname}")
        public Optional <Admins> getAdminname(@PathVariable(name = "adminname") String adminname) {
            return adminService.getAdmin(adminname);
        }


        @GetMapping(path = "login")
        public String checkLogin(@RequestParam (name = "adminname") String adminname , @RequestParam (name = "password") String password ) {
            return adminService.getCheck(adminname,password);

        }


    }


