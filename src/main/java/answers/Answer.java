package main.java.answers;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import main.java.questions.Question;

@Entity(name = "main.java.answers.Answer")
@Table(name = "ANSWERS")
public class Answer implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "ANSWER_ID")
	private Integer answerId;

	@ManyToOne
	@JoinColumn(name = "QUESTION_ID")
	private Question question;

	@Column(name = "ANSWER")
	private String answer;

	@Column(name = "IS_CORRECT")
	private Integer isCorrect;

	@Column(name = "STATE")
	private Integer state;

	public Integer getAnswerId() {
		return answerId;
	}

	public void setAnswerId(Integer answerId) {
		this.answerId = answerId;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Integer getIsCorrect() {
		return isCorrect;
	}

	public void setIsCorrect(Integer isCorrect) {
		this.isCorrect = isCorrect;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

}
