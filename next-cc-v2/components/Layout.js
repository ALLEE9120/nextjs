export default function layout({ children }) {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
