"use client"
import React, { useState, useEffect } from 'react'
import { checkuser } from '@/actions/UserAction'
import { useRouter } from 'next/navigation'
import { useSession,signIn } from "next-auth/react"


const Username = ({ params }) => {
  const [currentUser, setCurrentUser] = useState({});
  const router = useRouter()
  const { data: session, status } = useSession();
 

  const getData = async () => {
    let u = await checkuser(params);
    setCurrentUser(JSON.parse(u));
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // Redirect to home if not logged in
    }

    getData();

  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>; // Loading state
  }

  if (!session) {
    return <div>You need to be logged in to access this page.</div>;
  }
 
  return (
    <>

      <section className="my-auto dark:bg-gray-900">
        <div className="w-full  mx-auto flex gap-4">
          <div
            className="w-full  mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            {/* <!--  --> */}
            <div className="">
              {/* <!-- Cover Image --> */}
              <div className={`w-full object-fill flex items-center justify-center sm:h-72 md:h-96 rounded-sm bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${currentUser.coverpic})` }} >
                {/* <!-- Profile Image --> */}
                <div
                  className={`mx-auto object-cover flex items-center justify-center w-[141px] h-[141px]  sm:w-[200px] sm:h-[200px] bg-blue-300/20 rounded-full bg-contain bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url(${currentUser.profilepic})` }}
                >
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className='pb-7'>
          <Cards />
        </div>
      </section>
    </>
  )
}

export default Username







