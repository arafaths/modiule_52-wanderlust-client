'use client';

import { AlertDialog, Button } from '@heroui/react';
import { FaTrash } from 'react-icons/fa';

export function DeleteBooking({bookingId}) {
  const heandleDelete = async() => {
    const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  });
  const data = await res.json();
  window.location.reload();
  }
  return (
    <AlertDialog>
      <Button className="border border-red-400 text-red-500 px-6 py-5 flex items-center gap-2 hover:bg-red-50 transition rounded-none bg-none">
        <FaTrash className="text-sm" />
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{' '}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={heandleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
