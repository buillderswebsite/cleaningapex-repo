"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(essentialOnly));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const customPrefs = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(customPrefs));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          {!showSettings ? (
            // Main banner
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 bg-primary/10 rounded-full items-center justify-center flex-shrink-0">
                  <Cookie className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We use cookies to enhance your browsing experience, analyse site traffic,
                    and personalise content. By clicking &quot;Accept All&quot;, you consent to our
                    use of cookies as described in our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="btn-primary px-6 py-2.5 text-sm"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={acceptEssential}
                      className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Essential Only
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-2.5 text-sm font-medium text-primary hover:underline"
                    >
                      Manage Preferences
                    </button>
                  </div>
                </div>
                <button
                  onClick={acceptEssential}
                  className="text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Essential */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                        Required
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      These cookies are necessary for the website to function and cannot be
                      disabled. They are usually set in response to actions you take, such as
                      setting privacy preferences or filling in forms.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies help us understand how visitors interact with our website
                      by collecting and reporting information anonymously. This helps us
                      improve our site.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() =>
                        setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                      }
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? "bg-primary" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.analytics ? "right-1" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      These cookies are used to track visitors across websites to display
                      relevant advertisements. They help us measure the effectiveness of
                      our marketing campaigns.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() =>
                        setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                      }
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? "bg-primary" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.marketing ? "right-1" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={savePreferences}
                  className="btn-primary px-6 py-2.5 text-sm"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Accept All
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                For more information, please read our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
