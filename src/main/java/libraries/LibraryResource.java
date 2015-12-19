package main.java.libraries;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/libraries")
public class LibraryResource {

	@GET
	@Path("/universities/list")
	@Produces("application/json; charset=UTF-8")
	public List<University> getUniversities() {

		return new LibraryBean().getUnviersities();
	}

	@GET
	@Path("/category/list")
	@Produces("application/json; charset=UTF-8")
	public List<Category> getCategories() {

		return new LibraryBean().getCategories();
	}

}
