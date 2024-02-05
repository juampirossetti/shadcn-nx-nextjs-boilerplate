import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function DocsPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/docs');
  }

  return <h1 className="text-5xl">Docs Page</h1>;
}
