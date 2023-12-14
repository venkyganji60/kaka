import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";
//import { authOptions } from "@/pages/api/auth/[...nextauth]";
//import { getServerSession } from "next-auth";

import { getSession } from "next-auth/react";

const serverAuth = async (req: NextApiRequest) => {
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
