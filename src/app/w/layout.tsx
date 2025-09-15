export default function Wlayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <header>
                header
            </header>
            {children}
        </div>
    )
}