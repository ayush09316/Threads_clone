
import { OrganizationSwitcher, SignedIn, SignedOut, SignInButton, SignOutButton} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";


function Topbar() {

  return (
    <nav className='topbar'>
      <Link href={`/`} className='flex items-center gap-4'>
        <Image src='/assets/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>ZenWeave</p>
      </Link>
      
      <div className='flex items-center gap-1'>

        <div className='cursor-pointer'>
          <SignedOut>
            <SignInButton redirectUrl="/sign-in">
            <div className="flex flex-row gap-1">
            <Image
                  src='/assets/login.svg'
                  alt='login'
                  width={30}
                  height={30}
                />
                <p className="text-white xs:hidden md:block font-medium">SignIn</p>
            </div>
            </SignInButton>
            
          </SignedOut>
        </div>

        <div className=' md:hidden flex flex-row gap-2'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
