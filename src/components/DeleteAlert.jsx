'use client';

import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';

import { FaTrash } from 'react-icons/fa';

export function DeleteAlert({ destination }) {
  const { _id, destinationName } = destination;

  const handelDelete = async () => {
    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    });
    const data = await res.json();
    redirect('/destinations')
  }
  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="border px-5 py-2 flex items-center gap-2  transition"
      >
        <FaTrash className="text-sm" />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{' '}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
