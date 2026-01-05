import { useState, useEffect } from "react";

function App() {
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
  });
  const totalPages = Math.ceil(contacts.length / ITEMS_PER_PAGE) || 1;
  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = contacts.slice(start, start + ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setContacts(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const website = form.website.trim();
    const phone = form.phone.trim();

    if (!name || !email || !website || !phone) {
      alert("Field cannot be empty!");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      email,
      website,
      phone,
    };

    setContacts((prev) => [newContact, ...prev]);
    setForm({ name: "", email: "", website: "", phone: "" });
  };

  return (
    <div className="App">
      <h2>All Contacts</h2>

      <div>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Phone </th>
        </thead>
        <tbody>
          {pageItems.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.website}</td>
              <td>{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default App;

//1 fetch users
  // useEffect
//2 display contacts in a table
  //create the table
//3 add a form to create a new contact
  //when user type input, the form state onChange
//4 implement add with empty field validation + alert
  //when user click submit, the new contact from form added to the contact list
//5 add pagination
 //compute ITEMS_PER_PAGE, totalPages, start, pageItems, page, setPage
 //add prev and next button