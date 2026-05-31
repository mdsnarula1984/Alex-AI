/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  statText: string;
  tools: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  clientName: string;
  tagline: string;
  beforeState: string;
  afterState: string;
  metric: string;
  metricLabel: string;
  description: string;
  detailedResults: string[];
  toolsUsed: string[];
}

export interface ToolExpertiseItem {
  id: string;
  name: string;
  category: "ai" | "nocode" | "crm" | "workspace";
  logoText: string; // fallback
  description: string;
  expertiseLevel: number; // 0 to 100
  useCase: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number; // 1-5
  avatarColor: string; // for high-end CSS initials-based avatar blocks matching theme
}

export interface AutomationScenario {
  id: string;
  title: string;
  description: string;
  trigger: string;
  steps: {
    id: string;
    title: string;
    description: string;
    output: string;
    status: "idle" | "running" | "completed";
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
}
