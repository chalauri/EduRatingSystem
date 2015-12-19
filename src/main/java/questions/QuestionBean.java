package main.java.questions;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import main.java.State;

public class QuestionBean {

	EntityManagerFactory emf = Persistence
			.createEntityManagerFactory("eduratingsystem");

	public List<Question> getQuestions() {

		EntityManager em = emf.createEntityManager();
		List<Question> questions = em
				.createQuery(
						"from main.java.questions.Question e where e.state =:state",
						Question.class).setParameter("state", State.ACTIVE)
				.getResultList();

		List<Answer> answers = em
				.createQuery(
						"from main.java.questions.Answer e where e.state =:state",
						Answer.class).setParameter("state", State.ACTIVE)
				.getResultList();

		for (Question question : questions) {
			List<Answer> tempAnswers = new ArrayList<>();
			for (Answer answer : answers) {
				if (question.getQuestionId().equals(answer.getQuestionId())) {
					tempAnswers.add(answer);
				}
			}
			question.setAnswers(tempAnswers);
		}

		em.close();

		return questions;
	}

}
