import { useChallenges } from "../hooks/challenges";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox(): JSX.Element {
  const { activeChallenge } = useChallenges()

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`/icons/${activeChallenge.type}.svg`} />

            <strong>Novo desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button className={styles.challengeFailureButton} type="button">
              Falhei
            </button>

            <button className={styles.challengeSuccessButton} type="button">
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avançe de level completando os desafios
          </p>
        </div>
      )}
    </div>
  );
}
