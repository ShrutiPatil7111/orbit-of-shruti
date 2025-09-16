import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ExternalLink } from 'lucide-react';

interface ApiKeyInputProps {
  onApiKeySubmit: (key: string) => void;
  currentApiKey?: string;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeySubmit, currentApiKey }) => {
  const [apiKey, setApiKey] = useState(currentApiKey || '');
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  return (
    <Card className="p-4 mb-6 bg-blue-50/10 border-blue-200/20">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Gemini API Key (Optional)</Label>
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            Get API Key <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type={showKey ? 'text' : 'password'}
              placeholder="Enter your Gemini API key to enable AI enhancement"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              onClick={() => setShowKey(!showKey)}
            >
              {showKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            </Button>
          </div>
          <Button type="submit" size="sm" disabled={!apiKey.trim()}>
            Set Key
          </Button>
        </form>
        
        <div className="text-xs text-muted-foreground">
          <p className="mb-1">
            <strong>How to get your Gemini API Key:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Visit <span className="text-blue-400">aistudio.google.com/app/apikey</span></li>
            <li>Sign in with your Google account</li>
            <li>Click "Create API key in new project" or select existing project</li>
            <li>Copy the generated API key</li>
            <li>Paste it above to enable AI-powered enhancement features</li>
          </ol>
          <p className="mt-2 text-amber-400">
            ✨ <strong>Free tier:</strong> 15 requests per minute, 1500 requests per day - No hidden costs!
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ApiKeyInput;