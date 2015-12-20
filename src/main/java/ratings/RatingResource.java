package main.java.ratings;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import main.java.UniRatingReport;

@Path("/ratings")
public class RatingResource {

	@GET
	@Path("/rating")
	@Produces("application/json; charset=UTF-8")
	public List<UniRatingReport> getUniversities() {

		return new RatingBean().rating();
	}
}
