import ContactForm from "@/components/FormsComp";
import styles from '@/app/ui/home.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.h1}>
      <ContactForm />
    </div>
  );
};

export default HomePage;
    
