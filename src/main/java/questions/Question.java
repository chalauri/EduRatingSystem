package main.java.questions;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "main.java.questions.Question")
@Table(name = "QUESTIONS")
public class Question implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "QUESTION_ID")
	private Integer questionId;

	@Column(name = "QUESTION")
	private String question;

	@Column(name = "GRADE")
	private Double grade;

	@Column(name = "STATE")
	private Integer state;

	public Integer getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Double getGrade() {
		return grade;
	}

	public void setGrade(Double grade) {
		this.grade = grade;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

}
