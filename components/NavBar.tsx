"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import Button from "./Button";
import AccountDropdown from "./AccountDropdown";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {
    hasSearchInput?: boolean;
    hasSubmitButton?: boolean;
    isSubmitDisabled?: boolean;
    submitLabel?: string;
    onClickSubmit?: () => void
};

const NavBar: React.FC<Props> = ({hasSearchInput = true, hasSubmitButton, isSubmitDisabled, submitLabel, onClickSubmit}) => {
    const [keyword, setKeyword] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const isLoggedIn = true

    useEffect(() => {
        const queryKeyword = searchParams.get("keyword") || "";
        setKeyword(queryKeyword);
    }, [searchParams]);

    return (
        <header className="h-16 border-b border-slate-200 flex items-center justify-between px-24">
            <Link href="/">
                <img src="/images/logo-with-text.svg" className="h-8"/>
            </Link>

            {hasSearchInput && (
                <div className="w-[720px] absolute left-1/2 -translate-x-1/2 flex items-center">
                    <MdSearch className="text-slate-400 mr-4" size={24} />
                    <input 
                        className="font-sans text-sm placeholder-slate-400 text-slate-900 outline-none"
                        type="text" 
                        placeholder="Search" 
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                router.push(`/search?keyword=${keyword}`);
                            }
                        }}
                    />
                </div>
            )}

            <div className="flex items-center">
                {hasSubmitButton && (
                    <>
                        <Button type="button" disabled={isSubmitDisabled} onClick={onClickSubmit}>
                            {submitLabel}
                        </Button>
                        <div className="w-6"/>
                    </>
                )} 

                {isLoggedIn && (
                <div className="relative">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img 
                            className="w-10 h-10 rounded-full object-cover"
                            src="/images/dummy-avatar.png" 
                            alt="John Doe" 
                        />
                    </button>
                    
                    {isDropdownOpen && <AccountDropdown />}
                </div>
            )}
            {!isLoggedIn && (
                <Link href="/auth/sign-in">
                        <Button>Sign In</Button>
                </Link>
            )}
            </div>  
        </header>
    );
};

export default NavBar;