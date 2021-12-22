package com.example.eventms.model.Services;

import com.example.eventms.model.Entities.Admins;
import com.example.eventms.model.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class AdminService {


        private AdminRepository adminRepository;

        @Autowired
        public AdminService(AdminRepository adminRepository) {
            this.adminRepository = adminRepository;
        }

        public List<Admins> getAdmins() {
            return adminRepository.findAll();

        }

        public Optional<Admins> getAdmin(String adminname ) {
            return adminRepository.findById(adminname );

        }
        public String getCheck(String adminname ,String password) {
            if( adminRepository.existsById(adminname)  ) {

                String admin = adminRepository.findByUsername(adminname);
                if (admin.equals(password)) {
                    return "welcome you Authentication";
                } else {
                    return " sorry not  Authentication";
                }
            }
            return "sorry not  Authentication";
        }

        public void addNewAdmin(Admins adminname) {
            adminRepository.save(adminname);
        }
    }

