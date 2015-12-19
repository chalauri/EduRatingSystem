package main.java;

import java.util.List;

import main.java.specialities.Speciality;

public class SpecRatingReport {

	private Speciality speciality;

	private List<CategoryRatingReport> categoryRatingReports;

	private Double rating;

	public Speciality getSpeciality() {
		return speciality;
	}

	public void setSpeciality(Speciality speciality) {
		this.speciality = speciality;
	}

	public List<CategoryRatingReport> getCategoryRatingReports() {
		return categoryRatingReports;
	}

	public void setCategoryRatingReports(
			List<CategoryRatingReport> categoryRatingReports) {
		this.categoryRatingReports = categoryRatingReports;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

}
