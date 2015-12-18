package main.java;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class UserBean {

	EntityManagerFactory emf = Persistence
			.createEntityManagerFactory("eduratingsystem");
	
	public String get(){
		
		return "TEST";
	}
	
	public User getUser(){
		
		EntityManager em = emf.createEntityManager();
		User user = em.find(User.class, 1);
		
		em.close();
		
		return user;
	}

}
