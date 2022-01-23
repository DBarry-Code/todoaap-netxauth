import React from "react";
import { useSession, signOut } from "next-auth/client";

const Navbar = () => {
    const [session, loading] = useSession();

    // console.log({ session, loading });

    if (!session) return null;
    return (
        <header className='bg-dark text-white shadow mb-5 bg-dark'>
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justify-content-between'>
                    <a
                        href='/'
                        className='d-flex align-items-center text-white text-decoration-none'
                    >
                        <p className='pt-3 fw-bold'>ToDo - App</p>
                    </a>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <img
                                src={
                                    session.user.image ||
                                    "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
                                }
                                alt='user'
                                className=' mt-2 rounded-circle'
                                width={35}
                                height={35}
                            />
                            <p className='ms-2 mt-3 fw-bold'>
                                {session.user.name || "guest"}
                            </p>
                        </div>

                        <div className='text-end '>
                            <button
                                onClick={() => signOut()}
                                type='button'
                                className='btn btn-outline-danger ms-5 mt-2 me-2'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
