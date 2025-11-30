import { useCMS } from "@/contexts/CMSContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Settings } from "lucide-react";

const CMSAdmin = () => {
  const { content, updateContent, resetContent, isLoading, error } = useCMS();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Preview Updated",
      description: "Changes are shown in preview. Edit content in Contentful to persist changes.",
      variant: "default",
    });
  };

  const handleReset = () => {
    resetContent();
    toast({
      title: "Content Reset",
      description: "All content has been reset to defaults.",
    });
  };

  return (
    <div className="min-h-screen bg-secondary/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Settings className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Contentful CMS</h1>
              <p className="text-muted-foreground">Content powered by Contentful</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}>Reset to Default</Button>
            <Button onClick={handleSave}>Preview Changes</Button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
            {error}
          </div>
        )}

        {isLoading && (
          <div className="mb-6 p-4 bg-muted rounded-lg">
            Loading content from Contentful...
          </div>
        )}

        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm font-medium mb-2">📝 Content Management</p>
          <p className="text-sm text-muted-foreground">
            Content is fetched from Contentful. To make permanent changes, edit your content in the{" "}
            <a href="https://app.contentful.com" target="_blank" rel="noopener noreferrer" className="underline">
              Contentful web app
            </a>
            . Changes here are for preview only.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Main homepage hero content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="heroTitle">Hero Title</Label>
                <Input
                  id="heroTitle"
                  value={content.heroTitle || ''}
                  onChange={(e) => updateContent('heroTitle', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                <Textarea
                  id="heroSubtitle"
                  value={content.heroSubtitle || ''}
                  onChange={(e) => updateContent('heroSubtitle', e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About Section</CardTitle>
              <CardDescription>Mission and vision statements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="aboutMission">Mission Statement</Label>
                <Textarea
                  id="aboutMission"
                  value={content.aboutMission || ''}
                  onChange={(e) => updateContent('aboutMission', e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="aboutVision">Vision Statement</Label>
                <Textarea
                  id="aboutVision"
                  value={content.aboutVision || ''}
                  onChange={(e) => updateContent('aboutVision', e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Company contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contactEmail">Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={content.contactEmail || ''}
                  onChange={(e) => updateContent('contactEmail', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contactPhone">Phone</Label>
                <Input
                  id="contactPhone"
                  value={content.contactPhone || ''}
                  onChange={(e) => updateContent('contactPhone', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contactAddress">Address</Label>
                <Input
                  id="contactAddress"
                  value={content.contactAddress || ''}
                  onChange={(e) => updateContent('contactAddress', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CMSAdmin;
