const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}

if (exampleModal) {
  // Function to show the modal
  const showModal = () => {
    const modalTitle = exampleModal.querySelector('.modal-title');
    const modalBodyInput = exampleModal.querySelector('.modal-body input');

    // You can set the recipient information or perform any other dynamic updates here
    const recipient = "John Doe"; // Replace with your dynamic data
    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;

    // Show the modal
    const modal = new bootstrap.Modal(exampleModal);
    modal.show();
  };

  // Set a timeout to show the modal after 5 seconds
  setTimeout(showModal, 5000);
}
