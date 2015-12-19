package main.java.libraries;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import main.java.State;

public class LibraryBean {

	EntityManagerFactory emf = Persistence
			.createEntityManagerFactory("eduratingsystem");

	public List<University> getUnviersities() {

		EntityManager em = emf.createEntityManager();
		List<University> result = em
				.createQuery(
						"from main.java.libraries.University e where e.state =:state",
						University.class).setParameter("state", State.ACTIVE)
				.getResultList();
		em.close();

		return result;
	}
	
	public List<Category> getCategories() {

		EntityManager em = emf.createEntityManager();
		List<Category> result = em
				.createQuery(
						"from main.java.libraries.Category e where e.state =:state",
						Category.class).setParameter("state", State.ACTIVE)
				.getResultList();
		em.close();

		return result;
	}
}
