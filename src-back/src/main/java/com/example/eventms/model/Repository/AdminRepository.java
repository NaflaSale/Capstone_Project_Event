package com.example.eventms.model.Repository;
import com.example.eventms.model.Entities.Admins;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface AdminRepository extends JpaRepository <Admins,String>{




//
       @Query ("SELECT password FROM Admins WHERE adminname = :adminname")
       String findByUsername(@Param("adminname") String adminname);
////من هنا مشكلة الجداول
    }


