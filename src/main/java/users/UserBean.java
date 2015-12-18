package main.java.users;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;

public class UserBean {

	EntityManagerFactory emf = Persistence
			.createEntityManagerFactory("eduratingsystem");

	public String get() {

		return "TEST";
	}

	public User getUser() {

		EntityManager em = emf.createEntityManager();
		User user = em.find(User.class, 1);

		em.close();

		return user;
	}

	public User auth(String username, String password) {

		User user = null;
		EntityManager em = emf.createEntityManager();
		try {
			user = em
					.createQuery(
							"from main.java.users.User e where e.username =:username and e.password =:password ",
							User.class).setParameter("username", username)
					.setParameter("password", password).getSingleResult();

			em.close();
		} catch (NoResultException nre) {

			em.close();
		}

		return user;
	}

}
