import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";
import { getSession } from "next-auth/react";
//import { authOptions } from "@/pages/api/auth/[...nextauth]";
//import { getServerSession } from "next-auth";

const serverAuth = async (req: NextApiRequest) => {
  // const session = await getServerSession(req, res, authOptions);

  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;
