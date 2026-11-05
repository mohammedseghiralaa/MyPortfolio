"use client";

import { useEffect, useState } from "react";
import { fetchCertificates } from "@/app/services/sanity";

type Certificate = {
  _id: string;
  title: string;
  issuer?: string;
  issueDate?: string;
  credentialUrl?: string;
  image?: string;
};

export default function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    fetchCertificates().then(setCertificates);
  }, []);

  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">Certificates</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((c) => (
          <div key={c._id} className="overflow-hidden rounded-xl border">
            {c.image && <img src={c.image} alt={c.title} className="w-full" />}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-sm opacity-70">
                {c.issuer}
                {c.issueDate &&
                  ` · ${new Date(c.issueDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}`}
              </p>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block underline"
                >
                  View credential
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
