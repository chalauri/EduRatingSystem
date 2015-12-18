package main.java.ratings;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import main.java.libraries.Category;
import main.java.libraries.University;
import main.java.specialities.Speciality;
import main.java.users.User;

@Entity(name = "main.java.ratings.Rating")
@Table(name = "RATINGS")
public class Rating implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "RATING_ID")
	private Integer ratingId;

	@ManyToOne
	@JoinColumn(name = "UNIVERSITY_ID")
	private University university;

	@ManyToOne
	@JoinColumn(name = "SPECIALITY_ID")
	private Speciality speciality;

	@ManyToOne
	@JoinColumn(name = "CATEGORY_ID")
	private Category category;

	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private User user;

	@Column(name = "GRADE")
	private Double grade;

	public Integer getRatingId() {
		return ratingId;
	}

	public void setRatingId(Integer ratingId) {
		this.ratingId = ratingId;
	}

	public University getUniversity() {
		return university;
	}

	public void setUniversity(University university) {
		this.university = university;
	}

	public Speciality getSpeciality() {
		return speciality;
	}

	public void setSpeciality(Speciality speciality) {
		this.speciality = speciality;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Double getGrade() {
		return grade;
	}

	public void setGrade(Double grade) {
		this.grade = grade;
	}

}
