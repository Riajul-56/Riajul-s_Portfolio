import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Frontend Development With React",
    issuer: "Creative IT Institute",
    date: "01 September, 2024",
    description:
      "Comprehensive certification covering React, Next.js, and Tailwind.",
    link: "https://certificate.citsmp.com/?certificate_id=EREACT-23090419",
  },
  {
    id: 2,
    title: "Machine Learning with Python",
    issuer: "Coursera",
    date: "25 March, 2025",
    description:
      "Key concepts, tools, and roles involved in machine learning, including supervised and unsupervised learning techniques.",
    link: "https://www.coursera.org/account/accomplishments/verify/JECM77SVBAP2",
  },
  {
    id: 3,
    title: "Data Science Math Skills",
    issuer: "Coursera",
    date: "17 March, 2025",
    description: "Foundational mathematics required for data science.",
    link: "https://www.coursera.org/account/accomplishments/verify/5MM0QIEOWKMD",
  },
  {
    id: 4,
    title: "Introduction to Neural Networks and PyTorch",
    issuer: "Coursera",
    date: "17 March, 2025",
    description:
      "Key concepts of logistic regression, neural networks, and PyTorch for classification problems.",
    link: "https://www.coursera.org/account/accomplishments/verify/X3AKJAC71MP8",
  },
];

const certsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Riajul Hasan – Certifications",
  itemListElement: certificates.map((cert, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      description: cert.description,
      url: cert.link,
      dateCreated: cert.date,
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
      credentialCategory: "certificate",
    },
  })),
};

const Certificates = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(certsStructuredData)}
        </script>
      </Helmet>

      <section
        id="certificates"
        className="py-24 bg-bg-dark"
        aria-labelledby="certificates-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              id="certificates-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Certifications
            </h2>
            <div
              className="w-20 h-1 bg-brand mx-auto rounded-full"
              aria-hidden="true"
            ></div>
          </motion.div>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none"
            aria-label="Certifications list"
          >
            {certificates.map((cert, index) => (
              <motion.li
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-brand transition-all duration-300 group flex flex-col h-full"
              >
                <div
                  className="mb-4 p-3 bg-brand/10 rounded-lg w-fit"
                  aria-hidden="true"
                >
                  <Award className="text-brand" size={24} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar size={14} aria-hidden="true" />
                  <time dateTime={cert.date}>{cert.date}</time>
                </div>

                <p className="text-slate-400 text-sm mb-4 flex-grow font-medium">
                  {cert.issuer}
                </p>

                <p className="text-slate-500 text-xs mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${cert.title} from ${cert.issuer}`}
                  className="inline-flex items-center gap-2 text-brand text-sm font-medium hover:text-brand-hover transition-colors mt-auto"
                >
                  View Certificate <ExternalLink size={14} aria-hidden="true" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Certificates;
