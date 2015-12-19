package main.java;

import java.util.List;

import main.java.libraries.University;

public class UniRatingReport {

	private University university;

	private List<SpecRatingReport> specRatingReports;

	private Double rating;

	public University getUniversity() {
		return university;
	}

	public void setUniversity(University university) {
		this.university = university;
	}

	public List<SpecRatingReport> getSpecRatingReports() {
		return specRatingReports;
	}

	public void setSpecRatingReports(List<SpecRatingReport> specRatingReports) {
		this.specRatingReports = specRatingReports;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

}
