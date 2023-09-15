package jac_enterprises.jac;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import jac_enterprises.jac.model.About;
import jac_enterprises.jac.model.Contact;
import jac_enterprises.jac.repository.AboutRepository;
import jac_enterprises.jac.repository.ContactRepository;

@SpringBootApplication
public class JacApplication {

	public static void main(String[] args) {
		SpringApplication.run(JacApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(ContactRepository contactRepository, AboutRepository aboutRepository) {
		return arg -> {
			// create and save default contacts inside the database
			Contact orlando = new Contact();
			orlando.setName("Orlando Perez Santos");
			orlando.setPictureUrl("https://avatars.githubusercontent.com/u/109484555?v=4");
			orlando.setPortfolioUrl("https://santoorl.github.io/indexcontact.html");
			contactRepository.save(orlando);

			Contact Amani = new Contact();
			Amani.setName("Amani Zayed");
			Amani.setPictureUrl("https://avatars.githubusercontent.com/u/133261261?v=4");
			Amani.setPortfolioUrl("https://a-zayed.github.io/portfolio-wcci/contact.html");
			contactRepository.save(Amani);

			Contact Brett = new Contact();
			Brett.setName("Brett Heiney-Martin");
			Brett.setPictureUrl("https://avatars.githubusercontent.com/u/110037799?v=4");
			Brett.setPortfolioUrl("https://btheiney.github.io/#contact");
			contactRepository.save(Brett);

			Contact Thaer = new Contact();
			Thaer.setName("Thaer Hendawi");
			Thaer.setPictureUrl("https://avatars.githubusercontent.com/u/53184833?v=4");
			Thaer.setPortfolioUrl("https://thaerhindawi.github.io/WCCI-Portfolio/#contact");
			contactRepository.save(Thaer);

			About about = new About();
			about.setTeamName("JAC Enterprises");
			about.setDescription(
					"Jac Enterprises is an organization that specializes in offering niche adventures dedicated to learning about Earth's various ecosystems and unique terrains. Our motto is, \"Vincit Qui Se Vincit\" which means, \"He/she conquers who conquers him/herself.\" Jac prides itself on educating all their customers on what adventures are provided and what can be expected on a chosen adventure.");
			aboutRepository.save(about);
		};
	}

	// this method will allow Cross-Origin Resource Sharing to this application from outside applications
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**") // (/**) => pattern to allow access to all paths
						.allowedOrigins("*")
						.allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS");

			}
		};
	}

}
