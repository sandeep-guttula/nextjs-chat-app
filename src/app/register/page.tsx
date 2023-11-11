import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../../auth'
import Link from 'next/link';
import CheckOutButton from '../components/CheckOutButton';

const tiers = [
    {
      name: "Starter",
      id: null,
      href: "#",
      priceMonthly: "Free",
      description: "Get chatting right away with anyone, anywhere!",
      features: [
        "20 Message Chat Limit in Chats",
        "2 Participant limit in Chat",
        "3 Chat Rooms limit",
        "Supports 2 languages",
        "48-hour support response time",
      ],
    },
    {
      name: "Pro",
      id: "si_Onles_LNQYbMVZV",
      href: "#",
      priceMonthly: "£5.99",
      description: "Unlock the Full Potential with Pro!",
      features: [
        "Unlimited Messages in Chats",
        "Unlimited Participants in Chats",
        "Unlimited Chat Rooms",
        "Supports up to 10 languages",
        "Multimedia support in chats (coming soon)",
        "1-hour, dedicated support response time",
        "Early access to New Features",
      ],
    },
  ];
  

const RegisterPage = async ({redirect}:{redirect :boolean}) => {

    const session = await getServerSession(authOptions);



  return (
    <div className="mx-auto grid max-w-m grid-cols-1 gap-8 lg: max-w-4xl lg:grid-cols-2">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
        >
          <div>
            <h3 className="text-3xl font-semibold text-gray-900">
              {tier.name}
            </h3>
            <p className="mt-4 text-gray-500">{tier.description}</p>
          </div>
          <div className="mt-8">
            <div className="flex items-baseline text-6xl font-semibold">
              <span className="text-gray-800">{tier.priceMonthly}</span>
            </div>
            <p className="mt-1 text-gray-500">/month</p>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
              Whats included
            </h4>
            <ul role="list" className="mt-4 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          {redirect ? (
            <Link
              className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold
                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer
                disabled:opacity-80"
              href="/register"
            >
              Get Started today
            </Link>
          ) : (
            tier.id && <CheckOutButton id={tier.id} />
          )}
          {/* <Button 
              className='mt-8 border-black bg-black text-white hover:text-gray-900 border-2 hover:bg-white'
              // href={tier.href}
              // variant='slim'
            >
              {redirect ? "Get Started" : "Buy Now"}
            </Button> */}
        </div>
      ))}
    </div>
  )
}

export default RegisterPage