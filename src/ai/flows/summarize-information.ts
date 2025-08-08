// Summarize Information Flow
'use server';

/**
 * @fileOverview A flow to summarize a longer text for quicker consumption.
 *
 * - summarizeInformation - A function that handles the summarization process.
 * - SummarizeInformationInput - The input type for the summarizeInformation function.
 * - SummarizeInformationOutput - The return type for the summarizeInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeInformationInputSchema = z.object({
  text: z.string().describe('The text to summarize.'),
});
export type SummarizeInformationInput = z.infer<typeof SummarizeInformationInputSchema>;

const SummarizeInformationOutputSchema = z.object({
  summary: z.string().describe('The summary of the text.'),
});
export type SummarizeInformationOutput = z.infer<typeof SummarizeInformationOutputSchema>;

export async function summarizeInformation(input: SummarizeInformationInput): Promise<SummarizeInformationOutput> {
  return summarizeInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeInformationPrompt',
  input: {schema: SummarizeInformationInputSchema},
  output: {schema: SummarizeInformationOutputSchema},
  prompt: `Summarize the following text in a concise manner:\n\n{{{text}}}`, 
});

const summarizeInformationFlow = ai.defineFlow(
  {
    name: 'summarizeInformationFlow',
    inputSchema: SummarizeInformationInputSchema,
    outputSchema: SummarizeInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
