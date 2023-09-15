package jac_enterprises.jac.controller;

import jac_enterprises.jac.model.About;
import jac_enterprises.jac.model.Contact;
import jac_enterprises.jac.repository.AboutRepository;
import jac_enterprises.jac.repository.ContactRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
// This specifies the base URL for the routes defined in this controller
@RequestMapping("/api")
public class JacController {

    ContactRepository contactRepository;
    AboutRepository aboutRepository;

    @Autowired
    public JacController(ContactRepository contactRepository, AboutRepository aboutRepository) {
        this.contactRepository = contactRepository;
        this.aboutRepository = aboutRepository;
    }

    // HTTP GET route for list of contacts
    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        // Find all contacts
        List<Contact> contacts = contactRepository.findAll();
        System.out.println(contacts);
        return contacts;
    }

    // HTTP GET route for about information
    @GetMapping("/about")
    public About getAbout() {
        // find about info from the database
        Optional<About> about = aboutRepository.findById(1L);
        About aboutInfo = null;
        if (about.isPresent()) {
            aboutInfo = about.get();
        }

        return aboutInfo;
    }

    // HTTP POST route for adding a new contact
    @PostMapping("/contacts")
    public Contact addContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }
}
