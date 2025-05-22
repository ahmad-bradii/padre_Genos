import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate(new FormData(e.target));
          }}
        >
          <ContactInput
            name="name"
            type="text"
            placeholder="Name"
            pending={mutation.isLoading}
          />
          <ContactInput
            name="email"
            type="email"
            placeholder="Email"
            pending={mutation.isLoading}
          />
          <textarea
            placeholder="Message"
            name="message"
            disabled={mutation.isLoading}
          ></textarea>
          <button disabled={mutation.isLoading}>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput(props) {
  return (
    <input
      disabled={props.pending}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
